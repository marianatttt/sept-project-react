import logo from './logo.svg';
import './App.css';
import ComponentSimson from "./components/componentSimson";

function App () {
  return (
      <div className="wrap">
          <ComponentSimson
            itemName={'Homer'}
            pic={'https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_54_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6b00cf91b1b7aa374384f01afaa8370'}
          />

          <ComponentSimson
            itemName={'Marge'}
            pic={'https://www.looper.com/img/gallery/the-best-marge-moments-on-the-simpsons/intro-1609273702.jpg'}
          />

          <ComponentSimson
            itemName={'Bart'}
            pic={'https://i1.sndcdn.com/avatars-000099391844-1oczm0-t240x240.jpg'}
          />

          <ComponentSimson
            itemName={'Lisa'}
            pic={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e488156-54fd-4708-9a59-33458fb95ea4/d7tj7gd-ea43490e-53b8-4419-9d7e-1dfee1192c81.jpg/v1/fill/w_774,h_1032,q_70,strp/lisa_simpson_by_mrcsmrtns_d7tj7gd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI2NyIsInBhdGgiOiJcL2ZcLzBlNDg4MTU2LTU0ZmQtNDcwOC05YTU5LTMzNDU4ZmI5NWVhNFwvZDd0ajdnZC1lYTQzNDkwZS01M2I4LTQ0MTktOWQ3ZS0xZGZlZTExOTJjODEuanBnIiwid2lkdGgiOiI8PTMyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wq_0L9VC6ewIetvh0xnSsyX62OuGljEz8M5VOIonNBE'}
          />

          <ComponentSimson
            itemName={'Maggie'}
            pic={'https://cdn.costumewall.com/wp-content/uploads/2015/09/maggie-simpson.jpg'}
          />
      </div>
  );
}
export default App;
