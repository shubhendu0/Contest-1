const router = express.Router();
const {
  getEmployees,
} = require("../controllers/employeeController");


router.get("/", getEmployees);

module.exports = router;