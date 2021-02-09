function HamiltonPath(){
    /**
     * generate hamiltonian ath start with trival this.path that traverse from top conrner to the bottom right
     */

    this.path = new Array(4*4);

    this.generateHamiltonianPath=function(n,q){
        var i,j;
        for(i=0;i<n;i++){
            for(j=0;j<n;j++){
                if(i%2 == 0){
                    for(j=0;j<n;j++){
                        this.path[i*n+j]=[i,j];
                    }
                }else{
                    for(j=0;j<n;j++){
                        this.path[i*n+j]=[i,n-j-1];
                    } 
                }

            }
        }
        nsuccess = 0;
        nattempts = 0;
        //moves needed for backbite algorithm (this math I stolen from google)
        nmoves = q*10.0 * n * n * Math.pow(Math.log(2.+n),2);
        while(nsuccess < nmoves)
        {
            success = this.backbite(n);
            if (success) nsuccess++;
            nattempts++;
        }
        //randomly modify laast attempts
        for (i=0; i<nattempts; i++)
        {
            success = this.backbite(n);
        }

    };

    this.backbite = function(n){
        var x,y;
        var xedge,yedge;
        var iedge, addEdge;
        var i,j;
        var success;
        //start from (0,0) or (n-1,n-1) with 1/2 probablity
        var prob=Math.floor(Math.random()*2);
        if(prob == 0){
            //start (0,0)
            x = this.path[0][0];
            y = this.path[0][1];
            //check current start position 
            xedge = ((x == 0) || (x == n-1));
            yedge = ((y == 0) || (y == n-1));
            //at corner
            if(xedge && yedge){
                // 1/3 acceptance probablity at the corner
                addEdge = Math.floor(Math.random()*3) - 2;
            }else if(xedge || yedge){
                // 2/3 acceptance probablity at edges
                addEdge =  Math.floor(Math.random()*3) - 1;
            }else{
                // can accept all 3 edges
                addEdge =  Math.floor(Math.random()*3);
            }
            success = (addEdge >= 0);
            iedge = 0;
            i = 3;
            while(iedge <= addEdge){
                dx = Math.abs(x - this.path[i][0]);
                dy = Math.abs(y - this.path[i][1]);
                //neighbor points
                if(dx+dy == 1){
                    //found empty edge to add 
                    if(iedge == addEdge){
                        //reverse check cycle from 0 to i -1;
                        var len = (i-1) / 2;
                        for(j=0;j<len;j++){
                            var temp = this.path[j];
                            this.path[j] = this.path[i-1-j];
                            this.path[i-1-j] = temp; 
                        }
                    }
                    iedge++;
                }
                i += Math.max(2,dx+dy-1);
            }
        }else{
            var endPoint = n*n - 1;
            x = this.path[endPoint][0];
            y = this.path[endPoint][1];
            xedge = ((x == 0) || (x == n-1));
            yedge = ((y == 0) || (y == n-1));
            //at corner
            if(xedge && yedge){
                // 1/3 acceptance probablity at the corner
                addEdge = Math.floor(Math.random()*3) - 2;
            }else if(xedge || yedge){
                // 2/3 acceptance probablity at edges
                addEdge =  Math.floor(Math.random()*3) - 1;
            }else{
                // can accept all 3 edges
                addEdge =  Math.floor(Math.random()*3);
            }
            success = (addEdge >= 0);
            iedge = 0;
            i = endPoint - 3;
            while(iedge <= addEdge){
                dx = Math.abs(x - this.path[i][0]);
                dy = Math.abs(y - this.path[i][1]);
                //neighbor points
                if(dx+dy == 1){
                    //found empty edge to add 
                    if(iedge == addEdge){
                        //reverse walk from end point to 0;
                        var len = (endPoint-i-1) / 2;
                        for(j=0;j<len;j++){
                            var temp = this.path[endPoint-j];
                            this.path[endPoint-j] = this.path[i+1+j];
                            this.path[i+1+j] = temp; 
                        }
                    }
                    iedge++;
                }
                i -= Math.max(2,dx+dy-1);
            }
        }
        return success;

    }

} 