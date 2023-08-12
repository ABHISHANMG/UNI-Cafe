import {useEffect, useState, useMemo} from 'react'
import Header from '../Header'
import TabDash from '../TabDash'

import './index.css'
import FoodItems from '../FoodItems'

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([])

  const [foodItems, setFoodItems] = useState([])

  const [activeTabId, setActiveTabId] = useState(11)

  const getTheData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099',
    )
    const data = await response.json()
    console.log(data[0].table_menu_list)

    const formattedData = data[0].table_menu_list.map(eachItem => ({
      categoryDishes: eachItem.category_dishes,
      menuCategory: eachItem.menu_category,
      menuCategoryId: eachItem.menu_category_id,
      menuCategoryImage: eachItem.menu_category_image,
      nextUrl: eachItem.nexturl,
    }))

    setRestaurantList(formattedData)
    console.log(formattedData)
  }

  useEffect(() => {
    getTheData()
  }, [])

  const tabClick = id => {
    console.log(id)
    setActiveTabId(id)
  }

  const filteredItems = restaurantList.filter(
    eachItem => activeTabId === eachItem.menuCategoryId,
  )

  if (
    filteredItems.length > 0 &&
    Object.prototype.hasOwnProperty.call(filteredItems[0], 'categoryDishes')
  ) {
    const indexFilteredItems = filteredItems[0]
    const filteredFormattedItems = indexFilteredItems.categoryDishes.map(
      eachItem => ({
        addonCat: eachItem.addonCat,
        dishAvailability: eachItem.dish_Availability,
        dishType: eachItem.dish_Type,
        dishCalories: eachItem.dish_calories,
        dishCurrency: eachItem.dish_currency,
        dishDescription: eachItem.dish_description,
        dishId: eachItem.dish_id,
        dishImage: eachItem.dish_image,
        dishName: eachItem.dish_name,
        dishPrice: eachItem.dish_price,
        nextUrl: eachItem.nexturl,
      }),
    )
    setFoodItems(filteredFormattedItems)
  }

  console.log(foodItems)

  return (
    <div>
      <Header />
      <ul className="un-order-tabs-container">
        {restaurantList.map(eachItem => (
          <TabDash
            active={eachItem.menuCategoryId === activeTabId}
            eachItem={eachItem}
            key={eachItem.menuCategoryId}
            tabClick={tabClick}
          />
        ))}
      </ul>
      <ul>
        {useMemo(
          () =>
            foodItems.map(eachItem => (
              <FoodItems key={eachItem.dishId} eachItem={eachItem} />
            )),
          [foodItems],
        )}
      </ul>
    </div>
  )
}

export default Home
