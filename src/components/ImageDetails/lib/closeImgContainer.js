export default function closeImgContainer(id) {
    const imgDetailsContainer = document.getElementById(id);
    if(imgDetailsContainer){
        imgDetailsContainer.style.display = 'none';
    }
}