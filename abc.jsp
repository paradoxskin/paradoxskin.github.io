<%@ page pageEncoding="utf-8"%>
<%
System.out.println("你好，Tomcat控制台");
String realPath = request.getServletContext().getRealPath("");
response.getWriter().print("Web项目的根目录绝对路径是"+realPath);
%>
