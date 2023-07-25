function isEmpty(s) {
    if (s == null || s === '') {
        return true;
    }
    return false;
}
function go_o()
{
    var url = document.getElementById('url').value;
    if(isEmpty(url))
        window.location.href="https://proxy.yice.eu.org";
    else if(document.getElementById('protocol').value === "https")
        window.location.href="https://proxy.yice.eu.org/proxy/" + url;
    else
        window.location.href="https://proxy.yice.eu.org/http/" + url;
    return;
}
function go()
{
    window.location.href="https://proxy.yice.eu.org"+(isEmpty(url = document.getElementById('url').value)?"":(document.getElementById('protocol').value === "https"?"/proxy/"+url:"/http/"+url));
}