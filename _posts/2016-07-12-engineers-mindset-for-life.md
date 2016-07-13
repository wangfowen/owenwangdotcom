---
layout: post
title: "An Engineer's Mindset For Life"
tagline: "How I view the world due to my career"
date: 2016-07-12 00:00:00
publish: false

---

A product manager friend once told me that in his line of work he thinks a lot 
about funnels - that's usually how growth is modeled - and he'd begun looking at 
other aspects of life through a similar lens.

{% image /images/funnel.png "Not the liquid or cake kind" %}

I've been working full time as an engineer for almost a year now, and it's 
gotten me wondering how that has shaped my own views. What are the funnels of 
_my_ world?

I've narrowed it down to three major concepts: optimization trade-offs, failure 
modes, and methodical searching. In this post I'll just talk about the first 
two, as the third is a whole beast of its own.

But before I get into those, I have a question for you: how do you think _your_ 
discipline has changed how _you_ think? I'd love to hear your responses! I 
suspect that many careers likely mold us in similar ways, even if the vocabulary 
is different. I'm very intrigued to find out what differences there may be.

###Optimization Trade-offs###

There is never a silver bullet that solves every possible problem. Instead you 
have to choose which problems are the most pressing and optimize for solving 
just those, while neglecting (or less optimally solving) the others.

It's impossible to optimize for everything. If you want your algorithm to run 
faster, usually you'll need to use more memory. Your database can't be 
consistent, available, _AND_ partition tolerant, so you have to decide which are 
the most crucial in your use case.

Every problem is different, and therefore every solution's optimizations are 
different.

Applying that to the real world, time management is a huge one for me. I don't 
have enough waking hours for everything I want to do, so I have to evaluate what 
I'm optimizing for. If I want to meet more new people, then I have less time to 
spend with my existing friends. Or if I spend large portions of time on both, 
then I have less time for self improvement.

There are some micro-optimizations I could do, like doing self improvement 
activities with friends. But in the end, it's still not possible to achieve it 
all. So which of these desires do I actually care the most about?

Weighing the options and thinking about what I'm giving up to gain, knowing 
there's no perfect solution, often helps me come to terms with decisions I make.

###Failure Modes###

Whenever we're designing a system, we have to consider what could be bottlenecks 
and points of failure down the line. And if a failure does occur, how would the 
system react?

If a social media site indexed the content it served by each post's id, what 
would happen when a post goes viral and many users are interacting with the 
single post? What if they indexed by user instead?  What could fail then, and 
when?

It's crucial to poke holes at the system and preemptively think about potential 
failures and how to handle them, so that when something does go awry, the 
consequences aren't terrible.

Looking at life like this, I often think to myself: realistically what are all 
the ways this could go wrong? Thinking in this way has actually helped me 
rationalize and overcome many of my fears.

When I was at a stage in my life where I had anxiety in talking to new people, 
part of what helped me overcome it was thinking about the failure cases and 
realizing how trivial the consequences were in those situations. The other 
person isn't interested in talking, so they decline to partake. They don't give 
you another thought and both your lives move on. They say something mean, or 
they flat out ignore you? You feel briefly humiliated, but again, within moments 
neither of you will think about each other again and your lives move on. It's 
really not so bad.

This kind of thinking has also helped me justify certain risks I've taken, and 
convinced me to not take certain other ones.

