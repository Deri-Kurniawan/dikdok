import '../components/App';
import VideoCard from './VideoCard';
import '../styles/App.css'

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <VideoCard
          src="https://v16-webapp.tiktok.com/a345ecf41cded92f5251a3864d005df7/62b1dd20/video/tos/alisg/tos-alisg-pve-0037c001/09897ae47926476e8764b2a1e044b68d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2198&bt=1099&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZgV2Zwe2NqVQml7Gb&mime_type=video_mp4&qs=0&rc=M2c6Ojc5ZTM5NTc0PDczM0BpanE3NGc6ZnBnPDMzODczNEA2Ni4uLWAtNTAxLi1hNjA2YSNkbGVvcjRnZTRgLS1kMS1zcw%3D%3D&l=202206210900370102440870701C0D1866"
        />
        <VideoCard
          src="https://v16-webapp.tiktok.com/a345ecf41cded92f5251a3864d005df7/62b1dd20/video/tos/alisg/tos-alisg-pve-0037c001/09897ae47926476e8764b2a1e044b68d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2198&bt=1099&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZgV2Zwe2NqVQml7Gb&mime_type=video_mp4&qs=0&rc=M2c6Ojc5ZTM5NTc0PDczM0BpanE3NGc6ZnBnPDMzODczNEA2Ni4uLWAtNTAxLi1hNjA2YSNkbGVvcjRnZTRgLS1kMS1zcw%3D%3D&l=202206210900370102440870701C0D1866"
        />
        <VideoCard
          src="https://v16-webapp.tiktok.com/a345ecf41cded92f5251a3864d005df7/62b1dd20/video/tos/alisg/tos-alisg-pve-0037c001/09897ae47926476e8764b2a1e044b68d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2198&bt=1099&btag=80000&cs=0&ds=3&ft=eXd.6H.EMyq8ZgV2Zwe2NqVQml7Gb&mime_type=video_mp4&qs=0&rc=M2c6Ojc5ZTM5NTc0PDczM0BpanE3NGc6ZnBnPDMzODczNEA2Ni4uLWAtNTAxLi1hNjA2YSNkbGVvcjRnZTRgLS1kMS1zcw%3D%3D&l=202206210900370102440870701C0D1866"
        />
      </div>
    </div>
  );
}

export default App;
