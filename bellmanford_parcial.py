# -*- coding: utf-8 -*-
"""
Created on Wed Sep  2 18:42:46 2020

@author: Usuario
"""
from mpi4py import MPI
import sys




# Algoritmo Bellman-Ford's 


class Graph:  
  
    def __init__(self, vertices):  
        self.V = vertices # Numero de vertices  
        self.graph = []  
  
    # Funcion para adicionar aristas 
    def addEdge(self, ini, fin, peso):  
        self.graph.append([ini, fin, peso])  
          

      
    # Funcion de encontrar la ruta mas corta 
    def BellmanFord(self, salida, llegada):  
  
        #Inicializar las distancias en infinito 
        dist = [float("Inf")] * self.V  
#        print("grafo-----",self.graph)
#        print(dist)
        dist[salida] = 0
  
  
        # Revisar para cada uno de los nodos o vertices -  1 
        count2 = 0
        for i in range(self.V - 1):  
            #Se va modificando el valor de los nodos. hasta recorrer todas sus aristas 
            count=0
            for ini, fin, peso in self.graph:  
                if dist[ini] != float("Inf") and dist[ini] + peso < dist[fin]:  
                        dist[fin] = dist[ini] + peso
#                        print("--u--",ini,"--v--",fin,"--w--",peso)                        
                print(dist)  
                count+=1
#                print(count,"\n")  
            count2+=1
#            print(count2,"-------------------------")                  
        print(salida,"El camino mas corto es: ", dist[llegada])  
        #self.printArr(dist,src,to) 

comm = MPI.COMM_WORLD
rank = comm.Get_rank()
size = comm.Get_size()
#rank = 0

if(rank==0):
#    Numero de vertices
    sys.stdout.write("Digite los vertices:")
    sys.stdout.flush()
    n = sys.stdin.readline()
    g = Graph(int(n))
#   numero de aristas
    sys.stdout.write("Digite el numero de aristas: ")
    sys.stdout.flush()
    nAris = sys.stdin.readline()
    for i in range(int(nAris)):
        sys.stdout.write("Digite vInicial, vFinal, peso: ")
        sys.stdout.flush()
        cadena = sys.stdin.readline()
        aris = cadena.split(",")
        g.addEdge(int(aris[0]),int(aris[1]),int(aris[2]))
        
#   Numero entrada----salida
    sys.stdout.write("Vertice salida: ")
    sys.stdout.flush() 
    salida = sys.stdin.readline()
    sys.stdout.write("Vertice Llegada: ")
    sys.stdout.flush() 
    llegada = sys.stdin.readline()
    g.BellmanFord(int(salida),int(llegada))
    for i in range(1, size):
        comm.send(g, dest=i, tag=i)
        print('Process {} sent data:'.format(rank), g)
#g = Graph(6)  
#g.addEdge(0, 1, 1)  
#g.addEdge(0, 2, 2)  
#g.addEdge(0, 3, 8)
#g.addEdge(1, 4, 3)
#g.addEdge(2, 3, 5)
#g.addEdge(2, 4, 3)  
#g.addEdge(2, 5, 8) 
#g.addEdge(3, 5, 12)  
#g.addEdge(4, 5, 4)  
  
# imprime la solucion 
#g.BellmanFord(0,5) 