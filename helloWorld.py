# -*- coding: utf-8 -*-
"""
Parallel Hello World
"""
#hello.py
from mpi4py import MPI

comm = MPI.COMM_WORLD
rank = comm.Get_rank()
print("hello world from process ", rank)

