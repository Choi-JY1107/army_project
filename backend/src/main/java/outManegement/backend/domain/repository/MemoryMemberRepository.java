package outManegement.backend.domain.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.domain.Member;
import outManegement.backend.domain.MemberRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MemoryMemberRepository implements MemberRepository {
    private Map<Long,Member> store = new HashMap<>();

    @Override
    public void save(Member member) {
        store.put(member.getMemberId(), member);
    }

    @Override
    public Member findById(Long id) {
        return store.get(id);
    }

    @Override
    public List<Member> findAllMember() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void clearAll() {
        store.clear();
    }
}
