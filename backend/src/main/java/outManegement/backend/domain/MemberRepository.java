package outManegement.backend.domain;

import java.util.List;

public interface MemberRepository {
    public void save(Member member);
    public Member findById(Long id);

    public List<Member> findAllMember();

    public void clearAll();
}
