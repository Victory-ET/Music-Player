import React from "react";
import style from "../styles/search.module.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";


function Search(props) {
  const [Image, setImage] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [playing, setPlaying] = React.useState(null);
  const searchClient = algoliasearch(
    "3XZTW978L4",
    "9087eae8a6bb684c21c417d8ebb2979f"
  );
  
  props.func(title);
  props.song(playing)
  props.image(Image)
 
  
  const Hit = ({ hit }) => {
    const handleClick = () => {
       setImage(hit.image);
       setPlaying(hit.music);
       setTitle(hit.name);
    };
    return (<div className={style.hit}>
      <div className={style.artist} onClick={handleClick}>
        <h4>{hit.name}</h4>
      </div>
    </div>)
  }
  
  const Content = () => {
    return(<div className={style.content}>
      <Hits hitComponent={Hit}/>
    </div>)
  }

  return (
    <div className={style.searchcont}>
      <InstantSearch searchClient={searchClient} indexName="Music">
              <SearchBox className={style.search} translations={{placeholder: 'Search for music'}}/>
        <main>
          <Content/>
        </main>
      </InstantSearch>
    </div>
  );
}

export default Search;
