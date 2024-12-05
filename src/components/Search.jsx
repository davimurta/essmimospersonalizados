import Footer from './Footer/Footer'
import Header from './Header/Header'
import AllProducts from './AllProducts/AllProducts'
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <AllProducts searchTerm={searchTerm} />
      <Footer />
    </>
  )
}

export default Search
