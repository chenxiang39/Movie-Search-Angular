const MAX_CAPACITY = 24
export const checkContain = function (dataArr, data){
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i].id === data.id && data.type === dataArr[i].type){
            return true;
        }
    }
    return false;
}
function removeContain(dataArr, data){
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i].id === data.id){
            dataArr.splice(i,1);
            return;
        }
    }
}
export const addMylist = function(data){
    let mylist = JSON.parse(localStorage.getItem('mylist'));
    if(!mylist || mylist.length === 0){
        let mylistData = [];
        mylistData.unshift(data);
        localStorage.setItem('mylist', JSON.stringify(mylistData));
    }
    else{
        if(checkContain(mylist, data)){
            removeContain(mylist, data);
            mylist.unshift(data);
            localStorage.setItem('mylist', JSON.stringify(mylist));
        }
        else{
            if(mylist.length < MAX_CAPACITY){
                mylist.unshift(data);
            }
            else{
                mylist.pop();
                mylist.unshift(data);
            }
            localStorage.setItem('mylist', JSON.stringify(mylist));
        }
    }
}

export const getMylist = function(){
    let mylist = JSON.parse(localStorage.getItem('mylist'));
    if(!mylist){
        return [];
    }
    return mylist;
}

export const removeMylist = function(data){
    let mylist = JSON.parse(localStorage.getItem('mylist'));
    if(checkContain(mylist,data)){
        removeContain(mylist,data);
    }
    localStorage.setItem('mylist', JSON.stringify(mylist));
}

export const getContinueWatch = function(){
    let mylist = JSON.parse(localStorage.getItem('ContinueWatch'));
    if(!mylist){
        return [];
    }
    return mylist;
}

export const addContinueWatch = function(data){
    let mylist = JSON.parse(localStorage.getItem('ContinueWatch'));
    if(!mylist || mylist.length === 0){
        let mylistData = [];
        mylistData.unshift(data);
        localStorage.setItem('ContinueWatch', JSON.stringify(mylistData));
    }
    else{
        if(checkContain(mylist, data)){
            removeContain(mylist, data);
            mylist.unshift(data);
            localStorage.setItem('ContinueWatch', JSON.stringify(mylist));
        }
        else{
            if(mylist.length < MAX_CAPACITY){
                mylist.unshift(data);
            }
            else{
                mylist.pop();
                mylist.unshift(data);
            }
            localStorage.setItem('ContinueWatch', JSON.stringify(mylist));
        }
    }
}