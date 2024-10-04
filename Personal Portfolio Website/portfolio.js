document.getElementById('documentation-btn1').addEventListener('click', function() {
    if(document.getElementById('fb').style.display == 'none')
    {
        document.getElementById('fb').style.display = 'block';
        document.getElementById('hidden-text-fb').style.display = 'none';
        document.getElementById('btn-project-fb').style.marginTop = '3vh';
        document.getElementById('hidden-text-fb').style.marginTop = '0vh';
    }
    else
    {
        document.getElementById('fb').style.display = 'none';
        document.getElementById('hidden-text-fb').style.display = 'block';
        document.getElementById('btn-project-fb').style.marginTop = '-17px';
        document.getElementById('hidden-text-fb').style.marginTop = '-6vh';
    }
});
document.getElementById('documentation-btn2').addEventListener('click', function() {
    if(document.getElementById('calc').style.display == 'none')
    {
        document.getElementById('calc').style.display = 'block';
        document.getElementById('hidden-text-calc').style.display = 'none';
    }
    else
    {
        document.getElementById('calc').style.display = 'none';
        document.getElementById('hidden-text-calc').style.display = 'block';
    }
});
document.getElementById('documentation-btn3').addEventListener('click', function() {
    if(document.getElementById('NI').style.display == 'none')
    {
        document.getElementById('NI').style.display = 'block';
        document.getElementById('hidden-text-NI').style.display = 'none';
        document.getElementById('btn-project-NI').style.marginTop = '3vh';
    }
    else
    {
        document.getElementById('NI').style.display = 'none';
        document.getElementById('hidden-text-NI').style.display = 'block';
        document.getElementById('btn-project-NI').style.marginTop = '5vh';
    }
});
document.getElementById('documentation-btn4').addEventListener('click', function() {
    if(document.getElementById('SPS').style.display == 'none')
    {
        document.getElementById('SPS').style.display = 'block';
        document.getElementById('hidden-text-SPS').style.display = 'none';
    }
    else
    {
        document.getElementById('SPS').style.display = 'none';
        document.getElementById('hidden-text-SPS').style.display = 'block';
    }
});
document.getElementById('documentation-btn5').addEventListener('click', function() {
    if(document.getElementById('PGG').style.display == 'none')
    {
        document.getElementById('PGG').style.display = 'block';
        document.getElementById('hidden-text-PGG').style.display = 'none';
        document.getElementById('btn-project-PGG').style.marginTop = '3vh';
    }
    else
    {
        document.getElementById('PGG').style.display = 'none';
        document.getElementById('hidden-text-PGG').style.display = 'block';
        document.getElementById('btn-project-PGG').style.marginTop = '0vh';
    }
});