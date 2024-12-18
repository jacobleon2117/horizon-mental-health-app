// src/middleware/pagination.js
const paginateResults = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    try {
      const totalDocs = await model.countDocuments().exec();

      if (endIndex < totalDocs) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      results.totalPages = Math.ceil(totalDocs / limit);
      results.currentPage = page;
      results.totalDocs = totalDocs;

      req.paginationResults = results;
      req.paginationOptions = {
        skip: startIndex,
        limit: limit,
      };

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = { paginateResults };
