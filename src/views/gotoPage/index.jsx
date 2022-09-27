import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// import { Button } from "vant";
// import gotoPage from "@/utils/gotoPage";
// const {a,actionA}=gotoPage();
export default defineComponent(()=>{
    const router= useRouter();
    const goto= ()=>{
        router.push({
            path: "/guide",
            query: {
                user: "zhangsan"
            }
        })
    };

    
    



    const sendParams=()=>{
        router.push({
            name: "showInfo",
            params:{
                age: 26,   
            }
        })
    }

    


    const render= ()=>(
        <div>
        <el-button type="success" onClick={() => goto()}>跳转到新页面</el-button>
        <el-button type="success" onClick={() => actionA()}>改变值</el-button>  
        </div>
        
        // <Button type="success" onClick={() => sendParams()}>跳转到新页面</Button>
    )



    return render

})