export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payments & Wallet</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-500">Wallet Balance</p>
        <h2 className="text-3xl font-bold">$12,500</h2>

        <div className="mt-4 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Deposit</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Withdraw</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Transfer</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border text-left">Amount</th>
              <th className="p-3 border text-left">Sender</th>
              <th className="p-3 border text-left">Receiver</th>
              <th className="p-3 border text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">$500</td>
              <td className="p-3 border">Investor</td>
              <td className="p-3 border">Entrepreneur</td>
              <td className="p-3 border text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="p-3 border">$1,200</td>
              <td className="p-3 border">Sarah Johnson</td>
              <td className="p-3 border">Michael Rodriguez</td>
              <td className="p-3 border text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}