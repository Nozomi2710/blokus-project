<?php
require('model/modelClass.php');
class controller{
    
    protected $userstatus='un-pass';
    protected $level='unset';
    protected $userId='unset';
    private $userPassWord='unset';
    
    function __construct(){
           $args = func_get_args();
           if(isset($args[0]))
           $this->userId=$args[0];
           if(isset($args[1]))
           $this->userPassWord=$args[1];
           
           $loginTest = new model();//測試成功
        }//優先讀到ID/密碼+login
        
        
        
    function __destruct(){
        
        //記得把事件紀錄下來
    }
    function signUp(){
        
    }//註冊
    
    
    function command(){
        
        
    }//指令程式 command(指令,等級)
    private function search(){
        
    }//搜尋玩家
    private function findInfo(){
        
    }//找回密碼
    
    private function editInfo(){
        
    }//編輯資訊
    private function feedback(){
        
    }//回報/聯絡
    
}

?>