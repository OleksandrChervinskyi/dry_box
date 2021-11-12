import styles from './all-products.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";
import {Header} from "../../header";
import {useDispatch, useSelector} from "react-redux";
import {changeFilterValue, changeSortValue, getAll} from "./all-productsSlice";
import {OneProduct} from "./one-product";

export const AllProducts = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    //Store
    const {allProductsPage: {products, sortValue, filterValue, isLoading}} = useSelector(store => store)
    const countProducts = products.length

    console.log(filterValue)
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Shop
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.toolkit}>
                                <p>
                                    {countProducts} results
                                </p>
                                <div>
                                    Filter by
                                    <select name="filter" id="1" value={filterValue} onChange={({target: {value}}) => {
                                        dispatch(changeFilterValue(value))
                                    }}>
                                        <option value="all">
                                            All
                                        </option>
                                        <option value="tea">
                                            Tea
                                        </option>
                                        <option value="fruits">
                                            Friuts
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    Sort by
                                    <select name="sort" id="2" value={sortValue}
                                            onChange={({target: {value}}) => dispatch(changeSortValue(value))}>
                                        <option value="lowToHigh">
                                            $-$$$
                                        </option>
                                        <option value="highToLow">
                                            $$$-$
                                        </option>
                                        <option value="newToOld">
                                            Date, new to old
                                        </option>
                                        <option value="oldToNew">
                                            Date, old to new
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {isLoading && <p>Loading...</p>}
                        {products
                            .slice()
                            .sort((a, b) => sortValue === 'newToOld' ? a.id - b.id // new - old
                                : sortValue === 'oldToNew' ? b.id - a.id // old - new
                                    : sortValue === 'lowToHigh' ? a.id - b.id //$-$$$
                                        : b.id - a.id) //$$$-$
                            .map(value => <OneProduct key={value.id} product={value}/>)
                        }
                    </Row>
                </Container>
            </main>
        </>
    )
}