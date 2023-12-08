import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div className="page-container flex justify-center items-center">
      <div className="md:max-w-[60vw] xl:max-w-3xl md:h-[80vh] overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col items-start gap-4">
        <h1 className="font-bold text-3xl p-2">Settings</h1>

        <button
          className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2 text-red-600"
          onClick={() => {
            localStorage.removeItem('user');
            location.reload();
          }}
        >
          Remove data
        </button>
        <Link to="/" className="hideoverlay">
          <button className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
