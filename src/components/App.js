import '../components/App';
import VideoCard from './VideoCard';
import '../styles/App.css';
import getVideos from '../videos';

function App() {
  const videos = getVideos();
  return (
    <div className="app">
      <div className='app__videos'>
        {
          videos.map(({ id, src }) => (
            <VideoCard
              key={id}
              src={src}
            />
            )
        )}
      </div>
    </div>
  );
}

export default App;
