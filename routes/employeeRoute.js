const router = express.Router();
const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");


router.post("/", addEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/", deleteEmployee);

module.exports = router;