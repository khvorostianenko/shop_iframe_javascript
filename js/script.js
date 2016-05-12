/**
 * Created by Михаил on 12.05.2016.
 */
    function changeSrc(param)
    {
        frameCont=document.getElementById('for-frame');
        framePage=document.getElementById('frame');
        indexPage=document.getElementById('main');
        if (param==='index'){
            framePage.style.display='none';
            frameCont.style.display='none';
            indexPage=document.getElementById('main');
            indexPage.style.display='block';

        }
        else{
            indexPage.style.display='none';
            framePage.src=param;
            frameCont.style.display='block';
            framePage.style.display='block';
        }
    }