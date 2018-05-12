#include <sys / types.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys / socket.h>
#include <netdb.h>
#include <arpa / inet.h>

#define BUF_SIZE 500

main (int argc, char * argv [])
{
    struct addrinfo consejos;
    struct addrinfo * result, * rp;
    int sd, s, v = 1;
    char hbuf [NI_MAXHOST], sbuf [NI_MAXSERV];
    struct sockaddr_storage peer_addr;
    socklen_t peer_addr_len, ctam;
    ssize_t nread;
    char buf [BUF_SIZE];

   if (argc! = 2) {
        fprintf (stderr, "Uso:% s puerto \n", argv [0]);
        salir (EXIT_FAILURE);
    }

   memset (y sugerencias, 0, sizeof (struct addrinfo));
    hints.ai_family = AF_INET6; / * Permitir IPv4 o IPv6 * /
    hints.ai_socktype = SOCK_DGRAM; / * Socket Datagram * /
    hints.ai_flags = AI_PASSIVE; / * Para la dirección IP comodín * /
    hints.ai_protocol = 0; / * Cualquier protocolo * /
    hints.ai_canonname = NULL;
    hints.ai_addr = NULL;
    hints.ai_next = NULL;

   s = getaddrinfo (NULL, argv [1], & sugerencias, y resultado);
    if (s! = 0) {
        fprintf (stderr, "getaddrinfo:% s \n", gai_strerror (s));
        salir (EXIT_FAILURE);
    }

   / * getaddrinfo () devuelve una lista de estructuras de direcciones.
       Pruebe cada dirección hasta que logremos unir (2).
       Si socket (2) (o bind (2)) falla, nosotros (cerramos el socket
       y) prueba la siguiente dirección. * /

   para (rp = resultado; rp! = NULL; rp = rp-> ai_next) {
        sd = socket (rp-> ai_family, rp-> ai_socktype,
                rp-> ai_protocol);
        if (sd == -1)
            continuar;

	int op = 0;
        int r = setsockopt (sd, IPPROTO_IPV6, IPV6_V6ONLY, & op, sizeof (op));
	if (setsockopt (sd, SOL_SOCKET, SO_REUSEADDR, & v, sizeof (int)) == -1) {
            perror ("setsockopt");
            salida (1);
        }

	
       if (bind (sd, rp-> ai_addr, rp-> ai_addrlen) == 0)
	  descanso;
                  / * Exito * /

       cerrar (sd);
    }

   if (rp == NULL) {/ * Sin dirección correcta * /
        fprintf (stderr, "No se pudo enlazar \n");
        salir (EXIT_FAILURE);
    }

   freeaddrinfo (resultado); /* Ya no es necesario */

   / * Lee los datagramas y repítalos con el remitente * /

   para (;;) {
        peer_addr_len = sizeof (struct sockaddr_storage);
        nread = recvfrom (sd, buf, BUF_SIZE, 0, (struct sockaddr *) y peer_addr, y peer_addr_len);
        if (nread == -1)
            continuar; / * Ignorar solicitud fallida * /

       char host [NI_MAXHOST], servicio [NI_MAXSERV];

       s = getnameinfo ((struct sockaddr *) y peer_addr, peer_addr_len, host, NI_MAXHOST, servicio, NI_MAXSERV, NI_NUMERICSERV);
       si (s == 0)
            printf ("% l bytes bytes desde% s:% s \n datos:% s \n",
                    (largo) nread, host, servicio, buf);
        más
            fprintf (stderr, "getnameinfo:% s \n", gai_strerror (s));

       if (sendto (sd, buf, nread, 0, (struct sockaddr *) y peer_addr, peer_addr_len)! = nread)
            fprintf (stderr, "Error al enviar la respuesta \n");
    }
}