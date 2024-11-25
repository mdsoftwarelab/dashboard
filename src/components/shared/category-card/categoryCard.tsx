import React, {useEffect, useState} from "react"
import './categoryCard.css'
import Card from "../card/card"
import { slugFormatter } from "../../../utils/formatters/slug.formatter";

interface CategoryCardProps {
    value: (selected: string[]) => void
}

const CategoryCard:React.FC<CategoryCardProps> = ({ value }) => {
    const [categories, setCategories] = useState<string[]>(['uncategorized'])
    const [isNewCategory, setIsNewCategory] = useState<boolean>(false)
    const [newCategoryName, setNewCategoryName] = useState<string>('')
    const [selectedCategory, setSelectedCategory] = useState<string[]>([categories[0]])


    const toggleNewCategory = () => {
        setNewCategoryName('')
        setIsNewCategory(!isNewCategory)
    }

    const onNewCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNewCategoryName(value)
    }

    const save = () => {
        if (newCategoryName) {
            setCategories([...categories, slugFormatter(newCategoryName)])
            setSelectedCategory([...selectedCategory, slugFormatter(newCategoryName)])
            toggleNewCategory()
        }
    }

    const onCategorySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;

        setSelectedCategory(prevState => {
            if (checked) {
                return [...prevState, value]
            } else {
                return prevState.filter(item => item !== value)
            }
        })
    }

    useEffect(() => {
        value(selectedCategory)
    }, [value, selectedCategory]);

    return (
        <Card title={'Categories'}>
            <div className="ml-1 mb-1">
                {
                    categories.length > 0 && (
                        categories.map((category, key) => (
                            <div key={key}>
                                <input
                                    onChange={onCategorySelect}
                                    type="checkbox"
                                    id={key.toString()}
                                    value={category}
                                    checked={selectedCategory.includes(category)}
                                />
                                <label htmlFor={key.toString()}>{category}</label>
                            </div>
                        ))
                    )
                }
            </div>

            {
                isNewCategory && (
                    <div className="ml-1 mb-1 mr-1">
                        <input
                            className="w-fill p-sm"
                            type="text"
                            name="title"
                            value={newCategoryName}
                            onChange={onNewCategory}
                            placeholder={"category name"}
                            required={true}
                        />
                    </div>
                )
            }

            <div className="flex justify-between ml-1 mr-1">
                {
                    !isNewCategory && (
                        <div>
                            <button onClick={toggleNewCategory} className="btn-secondary-sm">add category</button>
                        </div>
                    )
                }

                {
                    isNewCategory && (
                        <>
                            <div>
                                <button onClick={toggleNewCategory} className="btn-secondary-sm">cancel</button>
                            </div>
                            <div>
                                <button onClick={save} className="btn-primary-sm">save</button>
                            </div>
                        </>
                    )
                }
            </div>
        </Card>
    )
}

export default CategoryCard