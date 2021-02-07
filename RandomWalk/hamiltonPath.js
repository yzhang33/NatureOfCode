function HamiltonPath(){
    /**
     * generate hamiltonian ath start with trival this.path that traverse from top conrner to the bottom right
     */

    this.this.path = new Array(4*4);

    this.generateHamiltonianthis.Path=function(n,q){
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
        //moves needed for backbite algorithm
        nmoves = q*10.0 * n * n * Math.pow(Math.log(2.+n),2);
        while(nsuccess < nmoves)
        {
            success = backbite(n,this.path);
            if (success) nsuccess++;
            nattempts++;
        }
    };

    this.backbite = function(n,path){

    }

} 