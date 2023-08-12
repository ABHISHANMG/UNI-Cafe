import './index.css'

const TabDash = props => {
  const {eachItem, tabClick, active} = props

  const {
    menuCategoryId,
    categoryDishes,
    menuCategory,
    menuCategoryImage,
    nextUrl,
  } = eachItem

  const activeTab = () => {
    tabClick(menuCategoryId)
  }

  return (
    <li onClick={activeTab}>
      <div className={active ? 'active' : ''}>
        <h1 className="tab-heading">{menuCategory}</h1>
      </div>
    </li>
  )
}

export default TabDash
