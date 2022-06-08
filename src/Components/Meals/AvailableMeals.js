import DUMMY_MEALS from './dummy-meals'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((item) =>{

    return <MealItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} description={item.description}/>
  }); 

  return <section className={classes.meals}>
    <Card>
        <ul> {mealslist}</ul>
    </Card>
  </section>
}

export default AvailableMeals;