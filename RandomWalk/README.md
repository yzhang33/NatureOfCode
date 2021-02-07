# Self Avoiding Path

I am interested in how the self avoiding walk works. Just like playing a snake game. From my research I learned that hamiltonian path(a path travels all grids and never from a cycle) is self avoiding and it also traverses all grids. For example, a 4x4 grid hamiltonian path starts at (0,0) and ends at (4,4). There are 52 ways to make hamiltonian path on a 4x4 grid. It is easy to make a self avoiding path in this situation. 

I wrote a p5 sketch does this. The start point is the purple one and yellow point is the end point. 

![self avoiding path](./img.png)

## Random Walk with Self Avoiding Path
Now the fun part is that the path I made in p5 is trivial even though it statisfys the characteristics of SAP. The algorithm I learned is backbite algorith. This [post](https://datagenetics.com/blog/december22018/index.html) did a good job to describe the backbite algorithm from this [paper](https://arxiv.org/abs/cond-mat/0508094).

I still developiong the backbite algorithm. This will add randomness into my oroginal path but the result is sitll a self avoiding path aka hamiltonian path.
