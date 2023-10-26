import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/types';
import FavoriteCard from '../../components/favorite-card/favorite-card';

type FavoritesProps = {
  offerData: OfferType[];
};

function Favorites({ offerData }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offerData.map((item: OfferType) => (
                // <OfferCard key={item.id} offer={item} />
                <li className="favorites__locations-items" key={item.id}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{item.city.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoriteCard offer={item} city={item.city.name} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;