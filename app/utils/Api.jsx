import { request, gql } from 'graphql-request'

const URL = "https://api-ap-southeast-2.hygraph.com/v2/clsk1i3563l5k01upxiqypm1u/master"

const getCategories = async ()=>{
    const query = gql`
        query Categories {
            categories {
            id
            name
            }
        }
    `
    const result = await request(URL, query)
    return result
}

const getProductByCategory = async (category)=>{
    const query = gql`
    query ProductsByCategory {
        products(where: {category: {id: "`+category+`"}}) {
          id
          name
          price
          rating
          photo {
            url
          }
          category {
            name
          }
        }
      }
    `
    const result = await request(URL, query)
    return result
}

const getProductDetail = async (product)=>{
    const query = gql`
    query ProductDetail {
        product(where: {id: "`+product+`"}) {
          id
          name
          price
          rating
          description
          totalOrder
          photo {
            url
          }
          category {
            name
          }
        }
      }
    `
    const result = await request(URL, query)
    return result
}

export default{
    getCategories,
    getProductByCategory,
    getProductDetail
}
