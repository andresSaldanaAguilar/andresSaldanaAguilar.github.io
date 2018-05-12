$(document).ready(function(){
        $('#updatefile').on('submit',function(e) {
            e.preventDefault();
            var formData = new FormData(document.getElementById("updatefile"));
            //100 bytes for data file, 4 times the size of the file to cipher           
            //var filesize = $("#file")[0].files[0].size;           
            //var musicfilesize = $("#musicfile")[0].files[0].size;
            //swal("Attetntion", "the file to cipher is bigger than you music file, we'll duplicate your file in order to make it out", "warning");
            $.ajax({   
                url: "FileReciever",
                type: "POST",              
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(message){
                    //getting rid of enter
                    message = message.replace(/[\r\n]/g,"");
                    if(message === "true"){
                        swal("File upload", "Upload succesful!", "success");
                        document.getElementById("download").disabled = false;
                        console.log("Ajax: data send successful");                        
                    }else{
                        swal("Size problem", "Error!", "error");
                    }
                },            
                error: function(jqXHR,estado,error){
                    console.log(error);
                    console.log(estado);
                }
            });      
        });
});
