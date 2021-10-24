import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainContent({ items }) {
  console.log( items)

  return (
    <div className="mainContent">
      <div className="mainContent__name">
        <span>Бортовой журнал</span>
        <h3>Бортовой журнал</h3>
      </div>

      <div className="mainContent__articles">

        <div className="accordion" id="accordionExample">

          {
            items ? items.map(article => {
              return <div key={article.link} className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <Link to="#collapseOne" className="mainContent__link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                    {article.title}
                  </Link>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Хостинг – услуга, в рамках которой вы сможете разместить и администрировать ваши сайты в сети. В одной из прошлых статей мы уже разобрали отличия платного от бесплатного хостинга, теперь же хотим рассказать, как можно сэкономить при выборе платного хостинга.
                  </div>
                </div>
              </div>
            })
              : 'No content'
          }




        </div>

      </div>
    </div>
  )
}

export default MainContent;

