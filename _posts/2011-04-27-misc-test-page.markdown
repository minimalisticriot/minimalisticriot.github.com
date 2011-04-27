---
layout: post
title: Misc Test Page
---

{{ page.title }}
================

<p class="meta">27 April 2011</p>

{% highlight ada %}
with Ada.Text_IO;
use Ada.Text_IO;
procedure ArchIsTheBest is
begin
  Put_Line("Arch is the best!");
end HelloWorld;
{% endhighlight %}

{% highlight sh %}
#!/bin/bash
yes Arch is the best!
{% endhighlight %}

{% highlight c linenos %}
/* "Arch is the best!" program in C */
#include <stdio.h>
#include <stdlib.h>
int main ()
{
   printf("Arch is the best!\n");
   return EXIT_SUCCESS;
}
{% endhighlight %}

{% highlight cl %}
#!/usr/bin/sbcl --script
(defparameter *best-list* '((English "Arch is the best!")
           (Chinese "Arch, 她出类拔萃!")
           (German "Arch ist das Beste!")
           (Greek "Το Arch είναι το καλύτερο!")))
(defun aitb ()
  (format t "Available languages: ~{~{~@(~a~)~*~}~^, ~}.~%" *best-list*)
  (loop for input = (progn (format t "~&Input the desired language, (or 'quit'): ~%")
                           (force-output)
                           (read-line))
     if (string-equal input "quit")
     do (loop-finish)
     else
     do (let ((language-def
               (assoc input *best-list*
                      :key (lambda (lang) (symbol-name lang))
                      :test #'string-equal)))
          (if language-def
              (format t "~&~A~%" (second language-def))
              (format t "~&Invalid language.~%"))))
  (format t "~&May the Arch be with you!~%"))
(aitb)
{% endhighlight %}

{% highlight bf %}
++>++++++>+++++<+[>[->+<]<->++++++++++<]>>.<[-]>[-<++>]
<----------------.---------------.+++++.<+++[-<++++++++++>]<.
>>+.++++++++++.<<.>>+.------------.---.<<.>>---.
+++.++++++++++++++.+.<<+.[-]++++++++++.
{% endhighlight %}
