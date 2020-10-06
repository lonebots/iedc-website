//File to retrieve advanced query results from url

const advancedQueryResults = (model) => async (req, res, next) => {
    //Declaring a query variable
    let query;

    //Copying req.query
    reqQuery = { ...req.query };

    //Fields to execute
    const removeQuery = ['select', 'sort', 'limit'];

    //Removing query from the url
    removeQuery.forEach(param => delete reqQuery[param]);


    //Converting to query form
    let queryStr = JSON.stringify(reqQuery);

    //Finding the specified resource from the database
    query = model.find(JSON.parse(queryStr));

    //Select operator finding 
    if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        // console.log(fields)
        query = query.select(fields);
        //console.log(query);

    }

    //Sort function
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt')
    }


    //Number of datas for sliding
    const limit = parseInt(req.query.limit, 10) || 100;

    //Executing limit property for number of datas for slider
    query = query.limit(limit);
    const result = await query;

    res.advancedQueryResults = {
        success: true,
        count: result.length,
        data: result
    };
    next();
}
module.exports = advancedQueryResults;