import '../components/App';
import VideoCard from './VideoCard';
import '../styles/App.css'

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <VideoCard
          src="https://v16-webapp.tiktok.com/26fa2d289bb0a225790a9a4fad1b76c0/62b1f72a/video/tos/alisg/tos-alisg-pve-0037c001/ab553a6c75734145a554257c07b1a19e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5902&bt=2951&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZpfSZwe2N0khml7Gb&mime_type=video_mp4&qs=0&rc=ZGY6ZjY1ODQzZDUzZ2RnOUBpM3dpbWU6ZjN3ZDMzODczNEBgL14wNi4wXzAxXjVjNTE2YSMtZWBjcjRfc2RgLS1kMS1zcw%3D%3D&l=20220621105139010245241006260A6E9D"
        />
        <VideoCard
          src="https://v16-webapp.tiktok.com/26fa2d289bb0a225790a9a4fad1b76c0/62b1f72a/video/tos/alisg/tos-alisg-pve-0037c001/ab553a6c75734145a554257c07b1a19e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5902&bt=2951&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZpfSZwe2N0khml7Gb&mime_type=video_mp4&qs=0&rc=ZGY6ZjY1ODQzZDUzZ2RnOUBpM3dpbWU6ZjN3ZDMzODczNEBgL14wNi4wXzAxXjVjNTE2YSMtZWBjcjRfc2RgLS1kMS1zcw%3D%3D&l=20220621105139010245241006260A6E9D"
        />
        <VideoCard
          src="https://v16-webapp.tiktok.com/26fa2d289bb0a225790a9a4fad1b76c0/62b1f72a/video/tos/alisg/tos-alisg-pve-0037c001/ab553a6c75734145a554257c07b1a19e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5902&bt=2951&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZpfSZwe2N0khml7Gb&mime_type=video_mp4&qs=0&rc=ZGY6ZjY1ODQzZDUzZ2RnOUBpM3dpbWU6ZjN3ZDMzODczNEBgL14wNi4wXzAxXjVjNTE2YSMtZWBjcjRfc2RgLS1kMS1zcw%3D%3D&l=20220621105139010245241006260A6E9D"
        />
      </div>
    </div>
  );
}

export default App;
