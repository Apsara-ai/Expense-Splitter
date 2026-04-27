import React, { useState, useEffect } from "react";
import API from "./api";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [balances, setBalances] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // ✅ Fetch expenses
  const fetchExpenses = async () => {
    try {
      const res = await API.get("/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Fetch balances
  const fetchBalances = async () => {
    try {
      const res = await API.get("/expenses/balances/trip1");
      setBalances(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Fetch users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Load on start
  useEffect(() => {
    fetchExpenses();
    fetchBalances();
    fetchUsers();
  }, []);

  // ✅ Add expense
  const addExpense = async () => {
    try {
      // ✅ validation
      if (selectedUsers.length === 0) {
        alert("Select at least one user");
        return;
      }

      // await API.post("/expenses", {
      //   group: "trip1",
      //   title: title,
      //   totalAmount: Number(amount),
      //   splitType: "equal",
      //   users: selectedUsers
      // });
      const res = await API.post("/expenses", {
  group: "trip1",
  title: title,
  totalAmount: Number(amount),
  paidBy: selectedUsers[0],   // ✅ IMPORTANT FIX
  splitType: "equal",
  users: selectedUsers
});

console.log("NEW EXPENSE:", res.data);
      await fetchExpenses();
      await fetchBalances();

      setTitle("");
      setAmount("");
      setSelectedUsers([]);

      alert("Expense Added!");
    } catch (err) {
      console.error(err);
      alert("Error adding expense");
    }
  };

  // ✅ Settle expense
  const settleExpense = async (id) => {
    try {
      await API.post(`/expenses/settle/${id}`);

      fetchExpenses();
      fetchBalances();

      alert("Expense settled!");
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Login/Register control
  if (!token) {
    return showLogin ? (
      <Login setToken={setToken} setShowLogin={setShowLogin} />
    ) : (
      <Register setShowLogin={setShowLogin} />
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Expense</h2>

      {/* ✅ Select Users */}
      <h3>Select Participants</h3>
      {users.map((u) => (
        <div key={u._id}>
          <input
            type="checkbox"
            checked={selectedUsers.includes(u._id)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedUsers([...selectedUsers, u._id]);
              } else {
                setSelectedUsers(
                  selectedUsers.filter((id) => id !== u._id)
                );
              }
            }}
          />
          {u.name}
        </div>
      ))}

      <br />

      {/* ✅ Inputs */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {/* ✅ EXPENSE LIST */}
      <h2>All Expenses</h2>

      {expenses.map((exp) => (
        <div
          key={exp._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0"
          }}
        >
          <h3>{exp.title}</h3>
          <p>Total: ₹{exp.totalAmount}</p>

          <p><strong>Paid by:</strong> {exp.paidBy?.name}</p>

          <p>
            Status: {exp.settled ? "✅ Settled" : "❌ Not Settled"}
          </p>

          <strong>Participants:</strong>
          <ul>
            {exp.participants.map((p, i) => (
              <li key={i}>
                {p.user?.name} → ₹{p.amount}
              </li>
            ))}
          </ul>

          {!exp.settled && (
            <button onClick={() => settleExpense(exp._id)}>
              Settle
            </button>
          )}
        </div>
      ))}

      <hr />

      {/* ✅ BALANCES */}
      <h2>Balances</h2>

      {Object.keys(balances).length === 0 ? (
        <p>No balances yet</p>
      ) : (
        Object.entries(balances).map(([key, amount]) => {
          const [from, to] = key.split("->");

          return (
            <div key={key}>
              {from} owes {to} → ₹{amount}
            </div>
          );
        })
      )}

      <br />

      {/* ✅ LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;