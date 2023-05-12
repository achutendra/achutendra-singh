import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [ads, setAds] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?keyword=${keyword}`);
      setAds(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="ads-grid">
        {ads.map((ad) => (
          <div key={ad._id} className="ad-card">
            <img src={ad.imageURL} alt="Ad" />
            <h3>{ad.company.name}</h3>
            <p>{ad.primaryText}</p>
            <p>{ad.headline}</p>
            <p>{ad.description}</p>
            <a href={ad.company.url}>{ad.CTA}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;