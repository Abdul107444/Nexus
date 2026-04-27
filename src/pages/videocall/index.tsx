export default function VideoCallPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Video Call Room</h1>

      {/* Video Screen */}
      <div className="bg-black h-[400px] rounded-lg flex items-center justify-center text-white text-lg">
        Video Stream Area
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Start Call
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          End Call
        </button>

        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Mute
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Share Screen
        </button>
      </div>
    </div>
  );
}