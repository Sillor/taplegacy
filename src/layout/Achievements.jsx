import Achievement from '../components/Achievement';
import { Link } from 'react-router-dom';

function Achievements() {
  return (
    <div className="page-container flex justify-center items-center">
      <div className="md:max-w-[60vw] xl:max-w-3xl md:h-[80vh] overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col items-start gap-4">
        <h1 className="font-bold text-3xl p-2">Achievements</h1>
        <Achievement
          title="Good Achievement"
          description="This is an example achievement."
          completed={true}
        />
        <Achievement
          title="Another Achievement"
          description="This achievement is not completed yet."
          completed={false}
        />

        <Link to="/" className="hideoverlay">
          <button className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
