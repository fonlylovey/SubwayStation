import os
import socket
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

server_port = 4321


def start_server_by_execute_exe():
    path = os.path.abspath('..')
    name = 'start_server.exe'
    exe = os.path.join(path, name)
    os.system(exe)


def locate_directory(path):
    os.chdir(path)


def run():
    server = HTTPServer(('0.0.0.0', server_port), SimpleHTTPRequestHandler)
    server.serve_forever()


def check_port_in_use(port, host='127.0.0.1'):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.connect((host, int(port)))
        s.shutdown(2)
        return True
    except:
        return False


if __name__ == '__main__':
    arg1 = sys.argv[1]
    print(arg1)
    os.chdir(arg1)

    if check_port_in_use(server_port):
        print('error: port %d is used' % server_port)
    else:
        print('idle')
        run()


