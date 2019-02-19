vertexes = [
    {X:-73, Y:-85},
    {X:-33, Y:-126},
    {X:  7, Y:-85},
    {X:-33, Y:-45},
]
point = {X:-40, Y:-60};


function isInPoly(vertexList, point){
    prev = vertexList.length - 1;
    let inside = false;

    for (i = 0; i < vertexList.length; i++){
        if (
                (
                    ((vertexList[i].Y <= point.Y) && (point.Y < vertexList[prev].Y)) || 
                    ((vertexList[prev].Y <= point.Y) && (point.Y < vertexList[i].Y))
                ) &&
                (point.X > (vertexList[prev].X - vertexList[i].X) * (point.Y - vertexList[i].Y) / (vertexList[prev].Y - vertexList[i].Y) + vertexList[i].X)

        ) inside = !inside;
        prev = i;
    }
    return inside;
}
console.log(isInPoly(vertexes, point));  

