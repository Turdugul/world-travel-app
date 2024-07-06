import { useCities } from "../contexts/CitiesContext";
import CitiItem from "./CitiItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking city on a map." />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CitiItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
