const ApiKey = 'XT6imEu3KlRpE3z5QJW0FA3cr9Ij4k1JHnAWViLSw5Sd3tdcd3OD_1yG8qQzCGP5_-V_XR8la2_g6jcq4kSCpBmCZe85-UlDQRfuX7uejH8gs1iDMjzsi06pObq6XXYx'

const Yelp = {
    searchYelp (term, location, sortBy) {
        return fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${ApiKey}`
            }
        } ).then((response => {
            return response.json();
        })).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name : business.name,
                        adress: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                })
            }
        })
    } 
}; 


export default Yelp;