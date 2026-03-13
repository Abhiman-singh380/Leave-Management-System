router.post("/login", async(req,res)=>{

const {email,password,role} = req.body

const user = await User.findOne({email,role})

if(!user) return res.status(400).json("User not found")

const valid = await bcrypt.compare(password,user.password)

if(!valid) return res.status(400).json("Wrong password")

const token = jwt.sign(
{id:user._id,role:user.role},
"secret"
)

res.json({token,user})

})