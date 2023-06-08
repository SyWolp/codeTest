function solution(new_id) {
        let idArr = new_id.toLowerCase().split("").filter((v) =>
              !["~","!","@","#","$","%","^","&","*","(",")","=","+","[","{","]","}",":","?",",","<",">","/"].includes(v)).join("").replace(/\.+/gi, ".").replace(/^\./gi, "").replace(/\.$/gi, "");
        if (idArr.length === 0) idArr += "aaa";
        else if (idArr.length > 15) {
          idArr = idArr.slice(0, 15).replace(/\.$/gi, "");
        } else {
          idArr = idArr.replace(/\.$/gi, "");
        }
        if (idArr.length < 3) {
          for (let i = idArr.length - 1; i < 2; i++) {
            idArr += idArr[idArr.length - 1];
          }
        }
        return idArr;
      }