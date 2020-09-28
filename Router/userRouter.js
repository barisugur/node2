const router = require('express').Router();
const { Console } = require('console');
const User = require('../Model/UserModel');
router.get('/',async (req,res)=>{
    const allUsers = await User.find({});
    res.json(allUsers);
});

// router.get('/:id',async (req,res)=>{
//     const allUsers = await User.find({});
//     res.json(allUsers);
//     });
    
router.post('/',async (req,res)=>{
        try{
            const addedUser = new User(req.body);
            const sonuc = await addedUser.save();
            res.send(sonuc);
        }catch(err){
            console.log("Kullanıcı eklerken hata yaşandı. Hata: "+ err);
        }
        });

router.patch('/:id',async (req,res)=>{

try{
    const sonuc= await User.findByIdAndUpdate({_id: req.params.id},req.body, {new:true, runValidators: true})
    if(sonuc){
        return res.json(sonuc);
    } else{
        return res.status(404).json({
            mesaj:"Kullanıcı bulunamadı."
        })
    }
}catch(err){
    console.log("Kullanıcı güncelleme hatası yaşandı. Hata: "+ err);
    }

        });


router.delete('/:id',async (req,res)=>{
        try{
            const sonuc = await User.findByIdAndDelete({_id:req.params.id});
                if(sonuc){
                   return res.json({
                        mesaj: "Kullanıcı silindi."
                    })
                }else{
                    return res.status(404).json({
                        mesaj: "Kullanıcı bulunamadı veya silinemedi."
                    });
                }
            }catch(err){
                console.log("Kullanıcı silerken bir hata oluştu. Hata: " + err);
            }
            });
module.exports = router;

