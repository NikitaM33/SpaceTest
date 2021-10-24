import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainContent } from '../Content';
import { fetchArticles } from '../../redux/actions/articles';


function Content() {
  const dispatch = useDispatch();
  const items = useSelector(({ articles }) => articles.items);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div className="content">
      <MainContent items={items} />
    </div>
  )
}

export default Content;
