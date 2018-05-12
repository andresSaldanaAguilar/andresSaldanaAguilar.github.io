/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logic;

//import static com.sun.xml.internal.ws.spi.db.BindingContextFactory.LOGGER;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.logging.Level;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author andressaldana
 */

@WebServlet(name = "FileReciever", urlPatterns = {"/FileReciever"})
@MultipartConfig
public class FileReciever extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods. In this case, saves the file on the server
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
protected void processRequest(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
    response.setContentType("text/html;charset=UTF-8");

}

private String getFileName(final Part part) {
    final String partHeader = part.getHeader("content-disposition");
    //LOGGER.log(Level.INFO, "Part Header = {0}", partHeader);
    for (String content : part.getHeader("content-disposition").split(";")) {
        if (content.trim().startsWith("filename")) {
            return content.substring(
                    content.indexOf('=') + 1).trim().replace("\"", "");
        }
    }
    return null;
}

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("metodo get disparado...");
        //processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
            response.setContentType("text/html;charset=UTF-8");
            System.out.println("POST request, uploading file...");
            //processRequest(request, response);           

            
            //brings the rest of the data
            final String key = request.getParameter("key");
            final String algorithm = request.getParameter("algorithm");
            final String mode = request.getParameter("mode");
            System.out.println("Algorithm: "+algorithm+", Mode: "+mode+", Key: "+key);
                
            //Creating file
            // Create path components to save the file
            final String path = "/Users/andressaldana/Documents/Github/SecretFiles/files";
            final Part filePart = request.getPart("file");
            final String fileName = getFileName(filePart);

            final Part musicfilePart = request.getPart("musicfile");
            final String musicfileName = getFileName(musicfilePart);            
            
            OutputStream out = null, musicout = null;
            InputStream filecontent = null, musicfilecontent = null;
            final PrintWriter writer = response.getWriter();
            
            try {               
                out = new FileOutputStream(new File(path + File.separator
                        + fileName));
                filecontent = filePart.getInputStream();
                int read = 0;
                final byte[] bytes = new byte[1024];

                while ((read = filecontent.read(bytes)) != -1) {
                    out.write(bytes, 0, read);
                }
                
                //LOGGER.log(Level.INFO, "File{0}being uploaded to {1}", new Object[]{fileName, path});                  
                //redirects to index
                //request.setAttribute("fileName",fileName);
                //request.getRequestDispatcher("index.jsp").forward(request, response);               
            }
            catch(FileNotFoundException fne) {
                writer.println("You either did not specify a file to upload or are "
                        + "trying to upload a file to a protected or nonexistent "
                        + "location.");
                writer.println("<br/> ERROR: " + fne.getMessage());
                //LOGGER.log(Level.SEVERE, "Problems during file upload. Error: {0}", 
                //new Object[]{fne.getMessage()});
            }
            finally {
                if (out != null) {
                    out.close();
                }
                if (filecontent != null) {
                    filecontent.close();
                }
            }
            //writng secong archive, the musci file
            try {
                
                musicout = new FileOutputStream(new File(path + File.separator
                        + musicfileName));
                musicfilecontent = musicfilePart.getInputStream();
                int read = 0;
                final byte[] bytes = new byte[1024];

                while ((read = musicfilecontent.read(bytes)) != -1) {
                    musicout.write(bytes, 0, read);
                }
                //LOGGER.log(Level.INFO, "File{0}being uploaded to {1}", new Object[]{fileName, path});                  
                //redirects to index
                //request.setAttribute("fileName",fileName);
                //request.getRequestDispatcher("index.jsp").forward(request, response);               
            }
            catch(FileNotFoundException fne) {
                writer.println("You either did not specify a file to upload or are "
                        + "trying to upload a file to a protected or nonexistent "
                        + "location.");
                writer.println("<br/> ERROR: " + fne.getMessage());
                //LOGGER.log(Level.SEVERE, "Problems during file upload. Error: {0}", 
                //new Object[]{fne.getMessage()});
            }
            finally {              
                if (musicout != null) {
                    musicout.close();
                }
                if (musicfilecontent != null) {
                    musicfilecontent.close();
                }             
            }
            //validacion de parte de amador
            writer.println("false");
            writer.close();
            System.out.println("respondiendo...");
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
