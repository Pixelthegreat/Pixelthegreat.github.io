# Thoughts on Compiler Inception
_by Elliot Kohmyer, June 21st, 2026_

&emsp;Compiler Inception (more commonly referred to as Bootstrapping) is the seemingly paradoxical phenomenon by which the compiler for a programming language may be written in the same language. It sounds ridiculous, but if you look at the majority of big compiled languages (C, Rust, Zig, Go, etc) then you'll find it is actually very common. It's almost like a rite of passage: Compilers are big complex programs, and once you've written one in your own language, you can confidently write other big complex programs in it with little fear.

&emsp;On the other hand, with how many compiled languages exist now, it feels like more of a flex than a practical choice. Sure, you could write a MyLanguage compiler in MyLanguage, but you could probably get by with a MyLanguage compiler written in C or Rust. The fact is that there's really no functional reason to bootstrap in 2026. Existing compilers like the GCC suite have already done so for decades and they've undoubtedly got your back. But even so, the novelty of the bootstrapping process, and the opportunity to test the capabilities of your language are compelling enough reasons for most people.

&emsp;It is certainly compelling enough for me. Although it is in the very early stages of development, I am working on a compiled language and I've decided to go down the bootstrapping route. The approach I've taken is to first create a compiler in C that compiles only a barebones subset of the language. From there I create a new compiler in that smaller language subset that compiles the full language. Finally, I adapt the new compiler to make use of the full language's features. And, voila! I have a compiler that can compile itself. I won't get into the details of how the bootstrapping process would work, in part because it is complicated and in part because I don't fully understand it myself. It's a bit hard to wrap my head around, but I'll figure it out.

&emsp;If you're taking the same approach as me, or perhaps a similar one, I would like to share a few thoughts about the idea of a language subset. I would recommend starting out simple, perhaps with something generally analogous to C in capabilities. This keeps the scope small for the first compiler, but I've also found that it helps in the process of creating the full one as well. The first compiler only really needs to work, and as such, it can (internally) be as messy as it needs to. From there, you can take a step back, learn from your mistakes and write the second one in a much cleaner manner now that you have a better idea of how to write a compiler.

&emsp;As for the full language, you can jump straight there if you wish. For me, the full language that I've designed is not actually that much bigger than the barebones subset. However, if you've designed a more complex language, perhaps more akin to Rust or Java than C or Go, than you might want to break the process up into further steps. For example, you could have MyLanguage A, then MyLanguage B with more features and capabilities, and finally MyLanguage C with all the intended features and capabilities.

&emsp;Here is a brief example of how the barebones subset of my language and the full language differ:
```
let integerArray := [3 int]{ 1, 2, 3 };

for let i := 0; i < lengthOf(array); i++ {

    printInteger(integerArray[i]);
};

------------------

let integerArray := array[int]{ 1, 2, 3 };

foreach i := integerArray {

    printInteger(i);
};
```
&emsp;Although the second example is cleaner, the first is still capable of doing the same thing. That is important: Simpler languages are still capable of things that complex languages are, but complex languages can often (not always but often) pull them off in cleaner ways.

&emsp;Anywho, that's all I have to say before I start rambling more about language design in general. Maybe I'll talk about that in the next post...

&emsp;Instrumentally, Ek
